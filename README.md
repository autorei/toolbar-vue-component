# Para baixar dependencias do nexus 

1) Crie um arquivo chamado .npmrc na raiz da aplicação

registry=https://nexus.cws.digital/repository/npm-group/
_auth=ZGV2ZWxvcGVyOmNhbmFsZGFwZWNh
email=dev@canaldapeca.com.br


# Para utilização no front-end

1) Digite o command com o arquivo .npmrc ja criado
npm install @cws-components/toolbar<br/>


2) Inclua os seguintes parametros no arquivo src/main.js

import '@cws-components/toolbar'<br/>
import TOOLBAR_LOADER from '@cws-components/toolbar/src';<br/>

3) Registre os modulos do component no arquivo src/main.js

TOOLBAR_LOADER.registry(app)
