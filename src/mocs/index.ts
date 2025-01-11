
interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl: string;
    role: string;
    isActive: boolean;
    createdAt: Date
    lastLogin: Date
    preferences: IPreferences
    video: string;
}

interface IPreferences {
    theme: string;
    notifications: boolean;
    language: string
}

enum EUser {
    ADMIN = 'admin',
    USER = 'user'
}

export const user: IUser[] = [
    {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'hashed_password_123',
        fullName: 'John Doe',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxRbPvQ8put1vmtx546tL6Hzjl5W1UuCclg&s',
        role: EUser.ADMIN,
        isActive: true,
        createdAt: new Date('2022-01-01T10:00:00Z'),
        lastLogin: new Date('2023-01-10T14:30:00Z'),
        preferences: {
            theme: 'dark',
            notifications: true,
            language: 'en',
        },
        video: '<iframe width="720" height="405" src="https://rutube.ru/play/embed/df9e72371d788bdfd9c62308328c72b0/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
    },
    {
        id: 2,
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'hashed_password_123',
        fullName: 'John Doe',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxRbPvQ8put1vmtx546tL6Hzjl5W1UuCclg&s',
        role: EUser.USER,
        isActive: true,
        createdAt: new Date('2022-01-01T10:00:00Z'),
        lastLogin: new Date('2023-01-10T14:30:00Z'),
        preferences: {
            theme: 'dark',
            notifications: true,
            language: 'en',
        },
        video: '<iframe width="720" height="405" src="https://rutube.ru/play/embed/df9e72371d788bdfd9c62308328c72b0/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
    },
    {
        id: 3,
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'hashed_password_123',
        fullName: 'John Doe',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxRbPvQ8put1vmtx546tL6Hzjl5W1UuCclg&s',
        role: EUser.USER,
        isActive: true,
        createdAt: new Date('2022-01-01T10:00:00Z'),
        lastLogin: new Date('2023-01-10T14:30:00Z'),
        preferences: {
            theme: 'dark',
            notifications: true,
            language: 'en',
        },
        video: '<iframe width="720" height="405" src="https://rutube.ru/play/embed/df9e72371d788bdfd9c62308328c72b0/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
    }
]