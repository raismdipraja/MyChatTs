import { memo } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const LayoutWrapper = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  return (
    <Outlet
      context={{
        location,
        navigate,
        query,
        setQuery,
      }}
    />
  );
});
