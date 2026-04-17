import { NextResponse } from "next/server";
import { Resend } from "resend";

// IMPORTANT: force Node runtime (needed for Buffer)
export const runtime = "nodejs";

function toBase64(buffer: ArrayBuffer) {
  return Buffer.from(buffer).toString("base64");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is missing in .env.local" },
        { status: 500 }
      );
    }

    // Read multipart/form-data
    const form = await req.formData();

    const name = String(form.get("name") || "");
    const contact = String(form.get("contact") || "");
    const city = String(form.get("city") || "");
    const details = String(form.get("details") || "");

    if (!name.trim() || !contact.trim() || !city.trim() || !details.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const files = form.getAll("files") as File[];

    // ---- FILE LIMITS ----
    const MAX_FILES = 5;
    const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10MB total

    let totalSize = 0;
    for (const f of files.slice(0, MAX_FILES)) {
      totalSize += f.size;
    }

    if (totalSize > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        {
          error:
            "Total file size too large. Please upload up to 5 photos (max 10MB total).",
        },
        { status: 400 }
      );
    }

    // Convert files to Resend attachments
    const attachments =
      files.length > 0
        ? await Promise.all(
            files.slice(0, MAX_FILES).map(async (file) => {
              const ab = await file.arrayBuffer();
              return {
                filename: file.name,
                content: toBase64(ab),
              };
            })
          )
        : undefined;

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "BRX <onboarding@resend.dev>",
      to: ["minepour.behzad@gmail.com"],
      subject: `New BRX Quote Request – ${name}`,
      text: `Name: ${name}
Contact: ${contact}
City: ${city}

Details:
${details}

Photos attached: ${files.length}`,
      attachments,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: data?.id,
    });
  } catch (err: any) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
