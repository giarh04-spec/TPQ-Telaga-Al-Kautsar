# Firestore Security Specification

## Data Invariants
- A PPDB Registration must have a unique `registrationId`.
- Only admins can read PPDB registrations and contact messages.
- Anyone can read news and gallery items.
- Only admins can create/update/delete news and gallery items.
- Anyone can create a PPDB registration or a contact message.

## The "Dirty Dozen" Payloads (Denial Expected)
1. **Unauthenticated Read**: Attempting to list `ppdb_registrations` without login.
2. **Unauthorized Read**: Logged in as a non-admin user, attempting to read `ppdb_registrations`.
3. **Malicious ID**: Creating a registration with a 2KB string as ID.
4. **Identity Spoofing**: Attempting to set `status` to `verified` during creation (as a public user).
5. **Ghost Field Injection**: Adding `isAdmin: true` to a news item.
6. **Bypassing Validation**: Sending a phone number as an array instead of a string.
7. **Resource Poisoning**: Sending a 1MB string in the `fullName` field.
8. **Unauthorized Update**: Attempting to change a news article as a public user.
9. **PII Leak**: Attempting to `get` a specific PPDB registration doc by ID without being an admin.
10. **State Shortcutting**: Updating a registration status from `pending` to `rejected` without admin rights.
11. **Spoofed Timestamp**: Providing a future `createdAt` date instead of `serverTimestamp()`.
12. **Admin Spoofing**: Attempting to access admin data by spoofing the admin flag (if implemented via claims, but we use DB lookup/hardcoded email).

## Test Runner (firestore.rules.test.ts)
(To be implemented in the next turn if needed)
