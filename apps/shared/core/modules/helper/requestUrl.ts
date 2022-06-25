// constants
import {
    accountConstants,
    RequestMethods,
    ServiceName,
} from "apps/shared/core/constants";

const handleUrl = (
    baseUrl: string,
    serviceName: string,
    title = "",
    method = RequestMethods.GET
): string => {
    const sessionId = sessionStorage.getItem("token");
    switch (serviceName) {
        case ServiceName.SEARCH:
            return `${baseUrl}?api_key=${accountConstants.apiKey}&query=${title}`;
        case ServiceName.WATCHLIST:
            if (method === RequestMethods.GET) {
                return `/account/Milad787878/watchlist/movies?api_key=${accountConstants.apiKey}&session_id=${sessionId}`;
            }
            if (RequestMethods.POST) {
                return `/account/Milad787878/watchlist?api_key=${accountConstants.apiKey}&session_id=${sessionId}`;
            }
            return "";
        default:
            return `${baseUrl}?api_key=${accountConstants.apiKey}`;
    }
};

export default handleUrl;
