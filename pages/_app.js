import { AppProvider } from '@component/Components/Context/ContextApi'
import { FilterContextProvider } from '@component/Components/Context/FilterContext'
import Layouts from '@component/Components/Layouts/Layouts'
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <AppProvider>
    <FilterContextProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </FilterContextProvider>
  </AppProvider>
}
