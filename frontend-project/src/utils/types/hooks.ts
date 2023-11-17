import { useMemo } from "react";
import { useLocation } from "react-router-dom";


export function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => {
        const searchParams = new URLSearchParams(search)
        return [
            searchParams,
            {
                startDate: searchParams.get("startDate"),
                endDate: searchParams.get("endDate")
            }
        ] as const
    }, [search])
  }
