// src/App.jsx
import AppRouter from "./router/AppRouter";

import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";

export default function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <LanguageProvider>
                    <AppRouter />
                </LanguageProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
