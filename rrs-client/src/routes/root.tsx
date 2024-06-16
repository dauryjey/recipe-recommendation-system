import { Provider } from "@/provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Outlet } from "react-router-dom"
import { Layout } from "@/components/Layout"

const queryClient = new QueryClient()

export const Root = () => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
    </Provider>
  )
}
