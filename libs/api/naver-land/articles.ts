import {toQueryString} from "@/libs/utils/to-query-string";

export async function getArticles({page, pageSize}: {
    page: number,
    pageSize: number,
}) {
    // const queryString = JSON.stringify({
    //     page,
    //     pageSize,
    // });

    const queryString = toQueryString({
        page,
        pageSize,
    });

    console.log(queryString);

    const res = await fetch(`http://localhost:3100/naver-land/articles?${queryString}`);

    return res.json();
}