import React from "react";
import "./index.scss";
export default function SearchInput({ name = "Mau Kemana ?" }) {
  return (
    <div>
      <form>
        <div className="input-group">
          <i class="fas fa-search form-control-icon" aria-hidden="true"></i>
          <input
            className="form-control k-search-form"
            type="search"
            placeholder={name}
            aria-label={name}
          />
        </div>
      </form>
    </div>
  );
}
