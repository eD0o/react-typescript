import React, { useState } from 'react'

// ?: is because is an optional parameter
function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  fetch

  return { data, loading, error }

}

export default useFetch