// constants
import { accountConstants } from "apps/shared/core/constants";

const handleUrl = (baseUrl: string): string =>
  `${baseUrl}?api_key=${accountConstants.apiKey}`;

export default handleUrl;
