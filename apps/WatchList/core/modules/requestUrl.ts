// constants
import { accountConstants, RequestMethods } from "apps/shared/core/constants";

const handleUrl = (method = RequestMethods.GET): string => {
  if (method === RequestMethods.GET) {
    return `/account/${accountConstants.accountId}/watchlist/movies?api_key=${accountConstants.apiKey}&session_id=${accountConstants.sessionId}`;
  } else if (RequestMethods.POST) {
    return `/account/${accountConstants.accountId}/watchlist?api_key=${accountConstants.apiKey}&session_id=${accountConstants.sessionId}`;
  }
  return "";
};

export default handleUrl;
