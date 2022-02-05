import { FC, useEffect, useState } from "react";
import { getRangeOfData } from "../../utils/getRangeOfData";
import { Pagination } from "./Index";

interface Data {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const PaginationExample: FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                let data = await res.json();
                setData(data);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    let dataPerPage = 10;

    let shownData = getRangeOfData(data, currentPage, dataPerPage);

    return (
        <>
            <header>Pagination example page</header>
            {loading && <div>Loading</div>}

            {data.length > 0 && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shownData.map((dat, i) => (
                                <tr key={i}>
                                    <td>{dat.userId}</td>
                                    <td>{dat.id}</td>
                                    <td>{dat.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        dataPerPage={dataPerPage}
                        totalNumberOfData={data.length}
                        // siblingCount={0}
                        onPageChange={(page: number) => {
                            setCurrentPage(page);
                        }}
                    />
                </>
            )}
        </>
    );
};
