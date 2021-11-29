import * as animeEndpoints from './endpoints/anime';
import * as waifuEndpoints from './endpoints/waifu';
import * as brainlyEndpoints from './endpoints/brainly/search';
export declare const anime: typeof animeEndpoints;
export declare const brainly: typeof brainlyEndpoints;
export declare const waifu: typeof waifuEndpoints;
export declare function coin(): Promise<cointResult>;
export declare function user(): Promise<user>;
export declare function memeindo(): Promise<subredditResult>;
export declare function memes(): Promise<subredditResult>;
export declare function dankmemes(): Promise<subredditResult>;
export declare function coronamemes(): Promise<subredditResult>;
export declare function subreddit(query: string): Promise<subredditResult>;
interface user {
    users: userArray[];
}
interface subredditResult {
    id: number;
    hash: string;
    author: string;
    account_id: number | null;
    account_url: string | null;
    title: string;
    score: number;
    size: number;
    views: number;
    is_album: boolean;
    album_cover: string | null;
    album_cover_width: number;
    album_cover_height: string;
    mimetype: string;
    ext: string;
    width: number;
    height: number;
    animated: boolean;
    looping: boolean;
    reddit: string;
    subreddit: string;
    description: string;
    create_datetime: string;
    bandwidth: string;
    timestamp: string;
    section: string;
    nsfw: false;
    prefer_video: boolean;
    video_source: unknown | null;
    video_host: unknown | null;
    num_images: number;
    in_gallery: boolean;
    favorited: boolean;
    adConfig: {
        safeFlags: string[];
    };
    highRiskFlags: unknown[];
    unsafeFlags: unknown[];
    wallUnsafeFlags: unknown[];
    showsAds: boolean;
}
interface userArray {
    name: string;
    surname: string;
    address: string;
    phone: string;
    email: string;
    city: string;
    number: string;
    id: string;
}
interface cointResult {
    coin_image: string;
    coin: string;
}
export {};
