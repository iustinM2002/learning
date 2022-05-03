export interface onSubmitData{
    email:string,
    password:string
}
export interface lobbyElement{
        title:string,
        description:string,
        image:string,
        link:string,
        tehn:string
    }
    
export interface dataContact{
    email:string,
    password?:string
  }
export interface FormValues extends Record<string,any>{
    email:string,
    password:string
}
export type lobbyData= [
    {
        title:string,
        description:string,
        image:string,
        link:string,
        tehn:string
    },
    {
        title:string,
        description:string,
        image:string,
        link:string,
        tehn:string
    },
]