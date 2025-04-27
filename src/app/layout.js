import React from 'react';

export default function Layout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ZYX Logistics</title>
      </head>
      <body>
        <header>
          <h1>ZYX Logistics System</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/home">Controle de Cargas</a></li>
              <li><a href="/expedition">Expedição</a></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
