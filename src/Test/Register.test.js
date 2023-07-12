import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { AuthContext } from "../components/User/Authcontext";
import Register from "../components/User/Register";
import { MemoryRouter } from "react-router-dom";

describe("Register component", () => {
  test("Intentar registrar un usuario con datos validos", async () => {
    const attemptRegisterMock = jest.fn().mockResolvedValue(true);
    window.alert = jest.fn(); // Mock the alert function

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ attemptRegister: attemptRegisterMock }}>
          <Register />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // Fill in the input fields with valid values
    act(() => {
      fireEvent.change(screen.getByLabelText("Nombre de usuario"), { target: { value: "TestUser123" } });
      fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juan" } });
      fireEvent.change(screen.getByLabelText("Apellido"), { target: { value: "Perez" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: "JuanPerez@Gmail.com" } });
      fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: "contraseñatest%" } });
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText("Aceptar"));
      await Promise.resolve(); // Wait for promises to resolve (e.g., API fetch)
    });

    // Assertions
    expect(attemptRegisterMock).toHaveBeenCalledWith({
      roleId: 3,
      userName: "TestUser123",
      name: "Juan",
      lastName: "Perez",
      email: "JuanPerez@Gmail.com",
      password: "contraseñatest%",
    });
    expect(window.alert).toHaveBeenCalledWith("Usuario registrado, por favor inicie sesion");
  });
  test("Intentar registrar un usuario con datos no validos", async () => {
    const attemptRegisterMock = jest.fn().mockResolvedValue(true);
    window.alert = jest.fn(); // Mock the alert function

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ attemptRegister: attemptRegisterMock }}>
          <Register />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // Fill in the input fields with valid values
    act(() => {
      fireEvent.change(screen.getByLabelText("Nombre de usuario"), { target: { value: "" } });
      fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Ju" } });
      fireEvent.change(screen.getByLabelText("Apellido"), { target: { value: "" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: "JuanPerez" } });
      fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: "contraseniatest" } });
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText("Aceptar"));
      await Promise.resolve(); // Wait for promises to resolve (e.g., API fetch)
    });

    // Assertions
    expect(attemptRegisterMock).not.toHaveBeenCalled(); // Make sure attemptRegister is not called
    expect(window.alert).toHaveBeenCalledTimes(1); // Ensure that the alert is displayed
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringMatching(/Usuario: Campo obligatorio./) &&
        expect.stringMatching(/Nombre: El nombre debe tener al menos 3 letras./) &&
        expect.stringMatching(/Apellido: Campo obligatorio./) &&
        expect.stringMatching(/Email: Debes insertar un Email valido./) &&
        expect.stringMatching(/Contraseña: La contraseña debe contener al menos un carácter no alfanumérico./)
    );
  });
});
