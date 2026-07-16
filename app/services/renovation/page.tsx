import ServicePageShell from "../../components/ServicePageShell";

export const metadata = {
  title: "Renovation Services Vancouver | Nestora",
  description:
    "Premium home renovation services in Vancouver. Bathrooms, kitchens, interior upgrades, drywall repair, and clean finishing.",
};
export default function RenovationPage() {
  return (
    <ServicePageShell
      title="Home Renovation in Vancouver"
      subtitle="Kitchen and bathroom updates, drywall repair, painting, trim and finishing services across Metro Vancouver."
      bullets={[
        "Kitchen & bathroom refresh (cosmetic updates)",
        "Drywall patching + paint with clean edges",
        "Trim, baseboards, small finishing details",
      ]}
    />
    
  );
}
