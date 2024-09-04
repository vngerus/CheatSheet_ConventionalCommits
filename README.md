
# Commit Conventions

Este proyecto sigue una serie de convenciones de commits para asegurar que el historial de cambios sea consistente y fácil de entender. A continuación, se detallan los tipos de commits que se deben utilizar:

## Convenciones de Commits

### `feat`
- **Descripción**: Se utiliza cuando se agrega una nueva funcionalidad al proyecto.
- **Ejemplo**: `feat: Add a new user login feature`

### `fix`
- **Descripción**: Se utiliza para corregir un bug o un error en el código.
- **Ejemplo**: `fix: Correct user authentication error`

### `chore`
- **Descripción**: Se refiere a tareas menores, de mantenimiento o cambios que no afectan el código fuente ni las pruebas.
- **Ejemplo**: `chore: Update dependencies`

### `docs`
- **Descripción**: Se utiliza para cambios en la documentación del proyecto.
- **Ejemplo**: `docs: Update README with installation instructions`

### `style`
- **Descripción**: Indica cambios en el formato o el estilo del código que no afectan la lógica o la funcionalidad (como la corrección de espacios, formato de código, etc.).
- **Ejemplo**: `style: Apply consistent code formatting`

### `refactor`
- **Descripción**: Se utiliza para refactorizar el código sin añadir nuevas funcionalidades ni corregir errores.
- **Ejemplo**: `refactor: Simplify login logic`

### `test`
- **Descripción**: Se refiere a la adición o modificación de pruebas unitarias o de integración.
- **Ejemplo**: `test: Add tests for user registration`

### `perf`
- **Descripción**: Se utiliza para commits que mejoran el rendimiento del código.
- **Ejemplo**: `perf: Optimize database queries`

## Cómo Usar estas Convenciones:

Al hacer un commit, asegúrate de utilizar el tipo de commit que mejor describa el cambio que estás realizando. Esto no solo ayuda a mantener el historial de cambios organizado, sino que también facilita la revisión de código y la colaboración en equipo.

## Ejemplo de Uso:

Si estás añadiendo una nueva funcionalidad para permitir que los usuarios restablezcan sus contraseñas, tu mensaje de commit podría verse así:

```bash
git commit -m "feat: Add password reset feature"
```

Si estás corrigiendo un error relacionado con la autenticación de usuarios, el mensaje de commit podría ser:

```bash
git commit -m "fix: Correct user authentication bug"
```

## Contribuir con el crecimiento:

Si tienes sugerencias para mejorar las convenciones de commits o para añadir nuevos tipos de commits, siéntete libre de abrir un issue o enviar un pull request.
