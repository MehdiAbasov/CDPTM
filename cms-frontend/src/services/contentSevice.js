import api from "../api/axios"


export const getList = async (type) => {

    const res = await api.get(`/${type}`)

    const data = res.data

    if (!Array.isArray(data)) return []

    return data.map(item => ({

        ...item,

        image: item.coverImage

    }))

}

export const getDetail = async (type, slug) => {

    const { data } = await api.get(`/${type}/${slug}`)

    return data

}