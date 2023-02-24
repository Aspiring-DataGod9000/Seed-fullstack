import { Routes, Route } from "react-router-dom"
import PageWrapper from "./components/page-wrapper"
import AccountManagementPage from "./pages/account-management-page/account-management-page"
import AuthPage from "./pages/auth-page/auth-page"
import { ExtraPage } from "./pages/extra-page/extra-page"
import HomePage from "./pages/home-page/home-page"

export const AppRoute = () => {
    return <Routes>
        <Route path="/" element={<AuthPage />} />


        <Route path="home" element={<PageWrapper component={<HomePage />} />} />
        <Route path="account-management" element={<PageWrapper component={<AccountManagementPage />} />} />
        <Route path="extra-page" element={<PageWrapper component={<ExtraPage />} />} />
    </Routes>
}