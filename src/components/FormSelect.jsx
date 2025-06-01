export default function FormSelect({ label, name, options, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select name={name} className="form-select" value={value} onChange={onChange}>
        <option value="">Selecione</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}