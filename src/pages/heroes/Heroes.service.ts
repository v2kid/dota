import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useParams } from 'react-router-dom'
import { Attributes } from 'types/attribute.type'
import { Hero } from 'types/hero.type'
import { Talent } from 'types/talent.type'

export const heroApi = createApi({
  reducerPath: 'hero', // Tên field trong Redux state
  tagTypes: [''], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonserver-zeta.vercel.app/',
   
  }),

  endpoints: (build) => ({
    gettalent: build.query<Talent, any>({
        query: (id) => ({
            url: `talent/?id=${id}`
          })
      }),
      getheroes: build.query<Hero[], { keyword: string }>({
        query: (variables) => {
          const { keyword } = variables
          return `heros`
          // return `heroes?keyword=${keyword}`
        },
      }),
      getheroability: build.query<Attributes, any>({
        query: (id) => ({
            // url: `Heroes/ability?id=${id}`
            url: `ability?id=${id}`
          })
      }),
  })
  
})
// const initialState = {}
interface HeroState {
  heroId: number | string |any
}
const initialState: HeroState = {
  heroId: null  
}
const heroSlice = createSlice({
  name: 'heroid',
  initialState,
  reducers: {
    detailHero: (state, action: PayloadAction<string>) => {
      state.heroId = action.payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addMatcher(dashboardApi.endpoints.getUsers.matchRejected, (state, action) => {})
  //   // ... other extraReducers
  // }
})
const heroReducer = heroSlice.reducer
export const {detailHero} = heroSlice.actions
export default heroReducer

export const { useGettalentQuery ,useGetheroesQuery , useGetheroabilityQuery} = heroApi
