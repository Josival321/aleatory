export declare function id(query: string): Promise<brainlyResult[]>;
export declare function pl(query: string): Promise<brainlyResult[]>;
export declare function pt(query: string): Promise<brainlyResult[]>;
export declare function us(query: string): Promise<brainlyResult[]>;
export declare const info: {
    id: string;
    pt: string;
    pl: string;
    us: string;
};
interface brainlyResult {
    node: {
        databaseId: number;
        content: string;
        created: string;
        lastActivity: string;
        attachments: brainlyAttachment[];
        author: brainlyAuthor;
        isAuthorsFirstQuestion: boolean;
        canBeAnswered: boolean;
        pointsForAnswer: number;
        pointsForBestAnswer: number;
        answers: brainlyAnswer[];
    };
}
interface brainlyAnswer {
    databaseId: number;
    content: string;
    points: number;
    isBest: boolean;
    created: string;
    rating: number;
    ratesCount: number;
    thanksCount: number;
    attachments: brainlyAttachment[];
    author: brainlyAuthor;
}
interface brainlyAuthor {
    databaseId: number;
    nick: string;
    points: number;
    gender: string;
    description: string;
    isDeleted: string;
    avatar: {
        url: string;
    };
    category: number;
    clientType: string;
    rank: {
        databaseId: number;
        name: string;
    };
    receivedThanks: number;
    bestAnswersCount: number;
    helpedUsersCount: number;
}
interface brainlyAttachment {
    url: string;
}
export {};
