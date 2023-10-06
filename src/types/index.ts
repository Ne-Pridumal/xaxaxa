export type User = {
    id:number;
    username:string;
    email:string;
    provider:string;
    confirmed:boolean;
    blocked:boolean;
  }

export type Group = {
  id:number;
  attributes:{
    title:string;
    uniqueId:string;
  }
}

export type Answer = {
  id:number;
}

export type Quiz = {
  id:number;
  attributes:{
    title:string;
    publishedAt:string;
    description:string;
    finishDate:string;
  }
}

export type MapQuestion = {
  id:number;
  attributes:{
    question:string;
    rightChoice:string;
  };
}

export type RelationQuestion = {
  id:number;
}