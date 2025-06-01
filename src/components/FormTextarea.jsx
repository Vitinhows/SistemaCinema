export default function FormTextarea({ label, name, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea name={name} className="form-control" value={value} onChange={onChange} />
    </div>
  );
}