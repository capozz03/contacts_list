import { useEffect, useState } from "react";

export function useDebounce<T> (query: T, delay?: number): T {
    const [debouncedQuery, setDebouncedQuery] = useState<T>(query)

    useEffect(() => {
      const timer = setTimeout(() => setDebouncedQuery(query), delay || 500)

      return () => {clearTimeout(timer)} 
    }, [query, delay])

    return debouncedQuery;
}