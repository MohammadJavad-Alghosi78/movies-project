// constants
import { accountConstants, RequestMethods } from "apps/shared/core/constants";

const handleUrl = (method = RequestMethods.GET): string => {
    const sessionId = sessionStorage.getItem("token");
    if (method === RequestMethods.GET) {
        return `/account/${accountConstants.accountId}/watchlist/movies?api_key=${accountConstants.apiKey}&session_id=${sessionId}`;
    }
    if (RequestMethods.POST) {
        return `/account/${accountConstants.accountId}/watchlist?api_key=${accountConstants.apiKey}&session_id=${sessionId}`;
    }
    return "";
};

export default handleUrl;
