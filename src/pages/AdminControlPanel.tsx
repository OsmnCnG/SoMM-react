import { useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AppDispatch, RootState } from '@/app/store'
import { getAllCompanies, getCompanyById } from '@/features/company/companySlice'

function CompanyControlPanel() {
  const { companyId } = useParams<{ companyId: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { companies, company } = useSelector((state: RootState) => state.companies)

  useEffect(() => {
    dispatch(getAllCompanies())
  }, [dispatch])

  useEffect(() => {
    if (companyId) {
      const id = companyId;
      dispatch(getCompanyById({ id }))
    }
  }, [companyId, dispatch])

  const handleCompanyClick = (id: number) => {
    navigate(`/AdminControlPanel/${id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Company List */}
          <div className="w-1/3">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-700">Şirketler</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-200">
                  {companies.map((companyItem) => (
                    <li
                      key={companyItem.id}
                      className={`p-4 flex items-center justify-between cursor-pointer transition duration-150 ease-in-out ${company && company.id === companyItem.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                        }`}
                      onClick={() => handleCompanyClick(companyItem.id)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${company && company.id === companyItem.id ? 'bg-blue-500' : 'bg-gray-400'
                            }`}>
                            {companyItem.id}
                          </span>
                          <span className="ml-3 font-medium text-gray-900">{companyItem.name}</span>
                        </div>
                        <ChevronRight className={`h-5 w-5 ${company && company.id === companyItem.id ? 'text-blue-500' : 'text-gray-400'
                          }`} />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Company and License Information */}
          <div className="w-2/3 space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Firma Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {company ? (
                  <div>
                    <p><strong>Id:</strong> {company.id}</p>
                    <p><strong>Firma Adı:</strong> {company.name}</p>
                    <p><strong>Açıklama:</strong> {company.description}</p>
                    <p><strong>İletişim:</strong> {company.phoneNumber}</p>
                  </div>
                ) : (
                  <p>Şirket bilgileri bulunamadı.</p>
                )}
                <div>
                  <strong className="font-medium text-gray-700">Sosyal Medya Hesapları:</strong>
                  <div className="mt-2 flex space-x-2">
                    {/* Sosyal medya ikonları buraya eklenebilir */}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Lisans Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  <strong className="font-medium">Durum:</strong>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {/* Lisans durumu buraya eklenebilir */}
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyControlPanel