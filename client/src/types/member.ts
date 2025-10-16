export interface Member {
  id: string;
  dateOfBirth: string;
  imageUrl?: string;
  displayName: string;
  created: string;
  lastActive: string;
  gender: string;
  description?: string;
  city: string;
  country: string;
}

export interface Photo {
  id: number;
  url: string;
  publicId?: string;
  memberId: string;
}

export interface EditableMember {
  displayName: string;
  description?: string;
  city: string;
  country: string;
}

export class MemberParams {
  gender?: string;
  minAge: number = 18;
  maxAge: number = 100;
  pageNumber: number = 1;
  pageSize: number = 10;
  orderBy = 'lastActive';
}

export class LikesParams {
  predicate: string = 'liked';
  pageNumber: number = 1;
  pageSize: number = 5;
}
