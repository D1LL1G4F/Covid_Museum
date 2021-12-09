export type ColorsEntity = {
    color: string;
    spectrum: string;
    hue: string;
    percent: number;
    css3: string;
}
export type ContextualtextEntity = {
    date?: null;
    textiletext?: null;
    context: string;
    text: string;
    type: string;
}
export type ExhibitionsEntity = {
    begindate?: string | null;
    enddate?: string | null;
    citation: string;
    exhibitionid: number;
    title: string;
}
export type Gallery = {
    begindate: string;
    gallerynumber: string;
    galleryid: number;
    name: string;
    theme: string;
    floor: number;
  }
export type GroupingsEntity = {
    groupid: number;
    name: string;
}
export type ImagesEntity = {
    date?: string | null;
    copyright: string;
    imageid: number;
    idsid: number;
    format: string;
    description?: string | null;
    technique?: string | null;
    renditionnumber: string;
    displayorder: number;
    baseimageurl: string;
    alttext?: string | null;
    width: number;
    publiccaption?: string | null;
    iiifbaseuri: string;
    height: number;
}
export type PlacesEntity = {
    displayname: string;
    confidence?: null;
    placeid: number;
    type: string;
}
export type PublicationsEntity = {
    publicationplace?: string | null;
    volumetitle?: string | null;
    citation: string;
    publicationyear: number;
    citationremarks?: null;
    pagenumbers: string;
    format: string;
    publicationid: number;
    title: string;
    volumenumber?: string | null;
    publicationdate: string;
}

export type TechnicalEntity = {
    text: string;
    formattedtext: string;
    type: string;
}
export type Details = {
    technical?: (TechnicalEntity)[] | null;
}
export type MediumEntityOrPlaceEntityOrCenturyEntityOrCultureEntityOrTopicEntity = {
    name: string;
    id: number;
}
export type Terms = {
    medium?: (MediumEntityOrPlaceEntityOrCenturyEntityOrCultureEntityOrTopicEntity)[] | null;
    place: (MediumEntityOrPlaceEntityOrCenturyEntityOrCultureEntityOrTopicEntity)[];
    century: (MediumEntityOrPlaceEntityOrCenturyEntityOrCultureEntityOrTopicEntity)[];
    culture: (MediumEntityOrPlaceEntityOrCenturyEntityOrCultureEntityOrTopicEntity)[];
    topic?: (MediumEntityOrPlaceEntityOrCenturyEntityOrCultureEntityOrTopicEntity)[] | null;
}
export type TitlesEntity = {
    titletype: string;
    titleid: number;
    displayorder: number;
    title: string;
}
export type PeopleEntity = {
    role: string;
    birthplace?: string | null,
    gender: 'male' | 'female',
    displaydate: string,
    prefix?: string | null,
    culture: string,
    displayname: string,
    alphasort: string,
    name: string,
    personid: number,
    deathplace?: string | null,
    displayorder: number,
}
export type WorktypesEntity = {
    worktypeid: string;
    worktype: string;
}
export type SeeAlsoEntity = {
    id: string;
    type: string;
    format: string;
    profile: string;
}
export type DetailObject = {
    objectid: number;
    objectnumber: string;
    accessionyear: number;
    dated: string;
    datebegin: number;
    dateend: number;
    classification: string;
    classificationid: number;
    medium: string;
    technique: string;
    techniqueid: number;
    period?: string | null;
    periodid: number;
    century: string;
    culture: string;
    style?: string | null;
    signed?: string | null;
    state?: string | null;
    edition?: null;
    standardreferencenumber?: null;
    dimensions: string;
    copyright?: string | null;
    creditline: string;
    department: string;
    division: string;
    contact: string;
    description?: null;
    provenance: string;
    commentary?: string | null;
    labeltext?: string | null;
    imagecount: number;
    mediacount: number;
    colorcount: number;
    markscount: number;
    peoplecount: number;
    titlescount: number;
    publicationcount: number;
    exhibitioncount: number;
    contextualtextcount: number;
    groupcount: number;
    relatedcount: number;
    totalpageviews: number;
    totaluniquepageviews: number;
    dateoffirstpageview: string;
    dateoflastpageview: string;
    verificationlevel: number;
    verificationleveldescription: string;
    imagepermissionlevel: number;
    lendingpermissionlevel: number;
    accesslevel: number;
    accessionmethod: string;
    rank: number;
    url: string;
    id: number;
    lastupdate: string;
    colors?: (ColorsEntity)[] | null;
    contextualtext?: (ContextualtextEntity)[] | null;
    exhibitions?: (ExhibitionsEntity)[] | null;
    gallery: Gallery;
    groupings?: (GroupingsEntity)[] | null;
    images?: (ImagesEntity)[] | null;
    primaryimageurl: string;
    places?: (PlacesEntity)[] | null;
    people?: (PeopleEntity)[] | null;
    publications?: (PublicationsEntity)[] | null;
    details?: Details;
    terms: Terms;
    titles?: (TitlesEntity)[] | null;
    title: string;
    worktypes?: (WorktypesEntity)[] | null;
    seeAlso?: (SeeAlsoEntity)[] | null;
}
