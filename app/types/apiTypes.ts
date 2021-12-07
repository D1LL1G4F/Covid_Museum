export type ResponseInfo = {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
    next: string;
}

export type Object = {
    id: string;
    title: string;
    dated: string;
    department: string;
    division: string;
    period: string;
    primaryimageurl: string;
};

export type ObjectResponse = {
    info: ResponseInfo;
    records: Object[];
}

export type Exhibition = {
    id: string;
    title: string;
    begindate: Date;
    enddate: Date;
}

export type ExhibitionResponse = {
    info: ResponseInfo;
    records: Exhibition[];
}

export type PreloadedImages = Array<Object>
