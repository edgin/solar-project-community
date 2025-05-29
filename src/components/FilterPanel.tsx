interface Props {
  state: string;
  setState: (value: string) => void;
}

export default function FilterPanel({ state, setState }: Props) {
  return (
    <div className="mb-3 col-4">
      <label
        htmlFor="stateSelect"
        className="form-label">
        Filter by State
      </label>
      <select
        id="stateSelect"
        className="form-select"
        value={state}
        onChange={(e) => setState(e.target.value)}>
        <option value="">All States</option>
        <option value="MA">MA</option>
        <option value="NY">NY</option>
        <option value="CA">CA</option>
        <option value="TX">TX</option>
      </select>
    </div>
  );
}
