// constants
import { accountConstants } from "apps/shared/core/constants";

const handleUrl = (baseUrl: string, title: string): string =>
    `${baseUrl}?api_key=${accountConstants.apiKey}&query=${title}`;

export default handleUrl;
