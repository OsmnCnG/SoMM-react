import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCompanies } from "./features/company/companySlice";
import { AppDispatch, RootState } from "./app/store";





export default function TableDemo() {




    const dispatch = useDispatch<AppDispatch>();

    // Redux state'teki users verisini almak için useSelector kullan
    const { companies, loading, error } = useSelector((state: RootState) => state.companies);


    useEffect(() => {
        dispatch(getAllCompanies())
    }, [dispatch])
    return (
        <Table>
            <TableCaption>A list of companies.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead className="w-[350px]">Name</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* users array'ini map ile tabloda gösteriyoruz */}
                {companies.map((company) => (
                    <TableRow key={company.id}>
                        <TableCell className="font-medium w-[100px]">{company.id}</TableCell>
                        <TableCell>{company.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className="text-left" colSpan={3}>Total Companies</TableCell>
                    <TableCell className="text-right">{companies.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}