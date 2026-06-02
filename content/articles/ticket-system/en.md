# Ticket System

Moddy's ticket system allows you to easily manage your members' support requests.

## Creating a Ticket Panel

A panel is a message with buttons to open a ticket.

```
/ticket panel create name:"Support" description:"Click a button to open a ticket."
```

### Adding Categories

Each category corresponds to a type of request:

```
/ticket panel category add panel:Support name:"Bug" emoji:"🐛" color:red
/ticket panel category add panel:Support name:"Question" emoji:"❓" color:blue
/ticket panel category add panel:Support name:"Suggestion" emoji:"💡" color:green
```

### Sending the Panel

```
/ticket panel send panel:Support channel:#support
```

## Channel Configuration

Configure where tickets will be created:

```
/ticket config category:"Open Tickets"
/ticket config archive:"Closed Tickets"
/ticket config logs:#ticket-logs
```

## Ticket Management

### Staff Commands

| Command | Description |
|---------|-------------|
| `/ticket close` | Closes the current ticket |
| `/ticket add @user` | Adds a member to the ticket |
| `/ticket remove @user` | Removes a member from the ticket |
| `/ticket assign @staff` | Assigns the ticket to a staff member |
| `/ticket priority high` | Sets the priority |
| `/ticket rename name` | Renames the ticket |

### Transcripts

Enable automatic transcripts to save conversations:

```
/ticket config transcripts:enable email:support@example.com
```

Transcripts are sent:
- By email (if configured)
- To the archive channel
- To the member who opened the ticket (DM)

## Automatic Messages

Customize automatically sent messages:

```
/ticket message opening text:"Hello {user}! Our team will respond within 24 hours."
/ticket message closing text:"Ticket closed. Thank you for contacting support!"
```

Available variables: `{user}`, `{ticket_id}`, `{date}`, `{staff}`

## Staff Roles

Define which roles can manage tickets:

```
/ticket staff add role:@Moderator
/ticket staff add role:@Support
```

## Statistics

View your ticket system statistics:

```
/ticket stats
```

Results include:
- Tickets opened this month
- Average response time
- Tickets by category
- Most active staff members
