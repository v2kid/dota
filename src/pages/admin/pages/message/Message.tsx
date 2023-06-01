import DefaultLayout from "pages/admin/layout/defaultLayout";
import { useGetContactsQuery } from "../dashboard/dashboard.service";
import { Fragment } from "react";
import { Contact } from "types/contact.type";

export default function Message  (){
    const {data,isFetching} = useGetContactsQuery()
    console.log(data)
    return(
    <DefaultLayout>
      
            {!isFetching &&
            data?.map((Contact) => (
             <div key={Contact._id}>
                <h1>{Contact.email}</h1>
                <h1>{Contact.status}</h1>
                <h1>{Contact.createDate} </h1>

             </div>
            ))}
    </DefaultLayout>
    )
}