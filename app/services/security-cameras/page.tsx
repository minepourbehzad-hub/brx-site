import ServicePageShell from "../../components/ServicePageShell";

export default function SecurityCamerasPage() {
  return (
    <ServicePageShell
      title="Security Cameras"
      subtitle="Indoor/outdoor camera coverage with clean cable routing when possible and reliable recording setup."
      bullets={[
        "Coverage plan (angles, entry points, blind spots)",
        "NVR/Cloud setup + app configuration",
        "Clean cable routing + verification",
      ]}
    />
  );
}
