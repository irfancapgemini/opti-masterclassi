type PatientDetailsBlockProps = {
  data: Record<string, unknown>;
};

const fields = [
  ["FirstName", "FirstName"],
  ["LastName", "Last name"],
  ["MobileNumber", "Mobile number"],
  ["EmailAddress", "Email address"],
] as const;

export function PatientDetailsBlock({ data }: PatientDetailsBlockProps) {
  const details = fields
    .map(([key, label]) => ({ label, value: data[key] }))
    .filter(({ value }) => value !== null && value !== undefined && String(value).trim() !== "");

  if (details.length === 0) {
    return null;
  }

  return (
    <section className="medicare-patient-details" aria-label="Patient details">
      {details.map(({ label, value }) => (
        <div key={label} className="medicare-patient-detail">
          <dt>{label}</dt>
          <dd>{String(value)}</dd>
        </div>
      ))}
    </section>
  );
}