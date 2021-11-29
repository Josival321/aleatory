export interface jikanResults {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    results: animeResults[];
}
interface animeResults {
    mal_id: number;
    url: string;
    image_url: string;
    title: string;
    airing: boolean;
    synopsis: string;
    type: string;
    episodes: number;
    score: number;
    start_date: string;
    end_date: string;
    members: number;
    rated: string;
}
export interface jikanNoResults {
    status: number;
    type: string;
    message: string;
    error: string;
}
export {};
