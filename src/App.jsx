import { useState } from "react"
import ServiceForm from "./components/ServiceForm"
import ServiceListTable from "./components/ServiceListTable"
import data from './serviceData.js'

function App() {
    const [serviceData, setServiceData] = useState(data)

    return (
        <main>
            <div className="flex gap-8 flex-col md:flex-row p-4">
                <ServiceForm />
                <ServiceListTable serviceData = {serviceData} />
            </div>
        </main>
    )
}

export default App
