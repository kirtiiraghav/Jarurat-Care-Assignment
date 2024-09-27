import { useState } from "react"
import ServiceForm from "./components/ServiceForm"
import ServiceListTable from "./components/ServiceListTable"
import data from './serviceData.js'
import Header from "./components/Header.jsx"

function App() {
    const [serviceData, setServiceData] = useState(data)

    return (
        <>
            <Header />
            <div className="flex items-start h-[calc(100vh-82px)] sm:h-[calc(100vh-72px)] gap-8 flex-col lg:flex-row p-4">
                <ServiceForm setServiceData={setServiceData} />
                <ServiceListTable setServiceData={setServiceData} serviceData={serviceData} />
            </div>
        </>
    )
}

export default App
