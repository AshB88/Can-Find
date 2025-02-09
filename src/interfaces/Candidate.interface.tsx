// TODO: Create an interface for the Candidate objects returned by the API
/*
export default interface Candidate {
    readonly image: HTMLImageElement | string | null;
    readonly name: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly bio: string | null;
}
*/

export default interface Candidate {
    readonly avatar_url: string | undefined;
    readonly name: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly bio: string | null;
    readonly login: string | null;
    readonly html_url: string | null;
}