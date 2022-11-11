import React from 'react'
import { Navbar, Button, Link, Text, useTheme, Image, Dropdown } from "@nextui-org/react";
import { useState, useMemo } from 'react';


const NavbarCustom = () => {
  const [languaje, setLanguaje] = useState(["en"]);

  const selectedValue = React.useMemo(
    () => Array.from(languaje).join(", ").replaceAll("_", " "),
    [languaje]
  );

  return (
    <Navbar shouldHideOnScroll variant="sticky" css ={{maxH: "50px"}}>
      <Navbar.Content hideIn="xs" variant="underline" css ={{maxH: "50px"}}>
          
          <Image
          src="/icons/telefono.svg"
          alt="icono-telefono"
          width= {16}
          height= {16}
          />
          <Navbar.Link href="tel:(237) 681-812-255" css={{gap: "10px"}}>(237) 681-812-255</Navbar.Link>
          
          <Image
          src="/icons/email.svg"
          alt="icono-email"
          width= {16}
          height= {16}
          />
          <Navbar.Link isActive href="mailto:fildineesoe@gmail.com" css={{gap: "10px"}}>fildineesoe@gmail.com</Navbar.Link>
         
          <Image    
          src="/icons/ubicacion.svg"
          alt="icono-ubicacion"
          width= {16}
          height= {16}
          />
         <Navbar.Link href="#map" css={{gap: "10px"}}>Cologne, Germany</Navbar.Link>
        </Navbar.Content>
        <Dropdown>
            <Dropdown.Button flat>
            {selectedValue == "en"?"English": "Español"}
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions"
            disallowEmplySelection
            selectionMode="single"
            selectedkeys={languaje}>
            onSelectionChange={setLanguaje}    
                <Dropdown.Item key="en">English</Dropdown.Item>
                <Dropdown.Item key="es">Español</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Navbar>
  )
}

export default NavbarCustom;
