# Deploy no Netlify - Colégio Mara & Lú

## 🚀 Instruções para Deploy

### 1. Preparação dos Arquivos
Todos os arquivos necessários já estão configurados:
- ✅ `netlify.toml` - Configuração de build
- ✅ `client/public/_redirects` - Redirecionamentos SPA
- ✅ `.gitignore` - Arquivos ignorados

### 2. Build de Produção
```bash
npm run build
```
O build gera os arquivos estáticos na pasta `dist/public/`

### 3. Deploy no Netlify

#### Opção A: Drag & Drop
1. Acesse [netlify.com](https://netlify.com)
2. Faça login na sua conta
3. Arraste a pasta `dist/public/` para o deploy
4. O site ficará disponível em poucos minutos

#### Opção B: Git Deploy
1. Faça commit do código para um repositório Git
2. Conecte o repositório no Netlify
3. Use as configurações:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist/public`

### 4. Configurações Importantes

#### Redirecionamentos SPA
O arquivo `_redirects` garante que todas as rotas funcionem:
```
/*    /index.html   200
```

#### Otimização de Cache
O `netlify.toml` inclui headers de cache otimizados:
- Assets (CSS/JS): Cache de 1 ano
- HTML: Sem cache para atualizações imediatas

### 5. Funcionalidades Incluídas
- ✅ Site totalmente responsivo
- ✅ Tour Virtual 360°
- ✅ Calculadora de Mensalidades
- ✅ Galeria com Lightbox
- ✅ Formulário de Contato
- ✅ Animações suaves
- ✅ Design moderno com cores laranja

### 6. Performance
- Bundle otimizado (~203KB gzipped)
- Imagens otimizadas do Unsplash
- CSS minificado (~12KB gzipped)
- Carregamento rápido

### 7. Domínio Personalizado
Após o deploy, pode configurar um domínio personalizado nas configurações do Netlify.

---
**Projeto desenvolvido por Kenylson Lourenço**