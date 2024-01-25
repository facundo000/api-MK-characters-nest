
// Generated by https://quicktype.io

export interface MkResponse {
    error:                   string;
    limit:                   number;
    offset:                  number;
    number_of_page_results:  number;
    number_of_total_results: number;
    status_code:             number;
    results:                 Result[];
    version:                 string;
}

export interface Result {
    image: { [key: string]: string };
    name:  string;
}