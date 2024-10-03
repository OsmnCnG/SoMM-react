
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


interface Company {
    id: any
    name: string
    description: string
    phoneNumber: string
    // Diğer şirket özellikleri buraya eklenebilir
}

interface CompanyState {
    companies: Company[]
    company: Company | null
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: CompanyState = {
    companies: [],
    company: null,
    loading: 'idle',
    error: null
}

// Tüm şirketleri getirmek için async thunk
export const getAllCompanies = createAsyncThunk(
    'companies/getAllCompanies',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<Company[]>(`https://localhost:7060/api/Companies`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('An unknown error occurred')
        }
    }
)

export const getCompanyById = createAsyncThunk(
    'companies/getCompanyById',
    async ({ id }: { id: string }, { rejectWithValue }) => {
        try {
            const response = await axios.get<Company>(`https://localhost:7060/api/Companies/${id}`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('An unknown error occurred')
        }
    }
)

const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCompanies.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(getAllCompanies.fulfilled, (state, action: PayloadAction<Company[]>) => {
                state.loading = 'succeeded'
                state.companies = action.payload
            })
            .addCase(getAllCompanies.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload as string || 'Failed to fetch companies'
            })
            .addCase(getCompanyById.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(getCompanyById.fulfilled, (state, action: PayloadAction<Company>) => {
                state.loading = 'succeeded'
                state.company = action.payload
            })
            .addCase(getCompanyById.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload as string || 'Failed to fetch company'
            })
    },
})

export default companySlice.reducer