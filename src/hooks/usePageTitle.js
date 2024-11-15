import { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | JobPortal` : "JobPortal";
    }, [title]);
};

export default usePageTitle;
