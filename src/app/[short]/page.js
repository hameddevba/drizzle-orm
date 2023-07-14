import {notFound} from 'next/navigation'
import {getShortLinkRecord} from "@/app/lib/db"

export default async function ShortPage({params}) {
    const {short} = params
    if (!short) {
        notFound()
    }
    const [record] = await getShortLinkRecord(short)
    if (!record) {
        notFound() // 404
    }
    return <>
        {JSON.stringify(record)}
    </>
}