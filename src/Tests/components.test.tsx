import { render, screen } from "@testing-library/react"
import WelcomeUser from "../components/WelcomeUser"
import Navbar from "../components/Navbar"
import { MemoryRouter } from "react-router-dom"

describe("WelcomeUser component", () => {
    test("should show the user component", () => {
        render(<WelcomeUser name="Foo" age={45} />)
        expect(screen.getByText("Foo")).toBeDefined()
    })

    test("should show the user component", () => {
        render(<WelcomeUser name="Calvin" age={45} />)
        expect(screen.getByText("Calvin")).toBeDefined()
    });
})

describe("Navbar component", () => {
    test("should test Navbar"), () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        expect(screen.getByText('Home')).toBeDefined();
        expect(screen.getByText('Todo')).toBeDefined();
        expect(screen.getByText('Freelance')).toBeDefined();
        expect(screen.getByText('Profil')).toBeDefined();
    }


    test("should test profile", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        const ProfileLink = screen.getByText("Profil")
        expect(ProfileLink).toBeDefined()

        const linkHref = ProfileLink.getAttribute("href")
        expect(linkHref).toEqual("/profile/@Sylvain")
    })

})
