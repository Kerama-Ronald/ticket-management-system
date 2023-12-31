import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
	title: { type: String, required: true },
    description: { type: String, required: true },
    projectName: { type: String, required: true },
    assignee: { type: String, required: true},
    priority: { type: String, required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
}, {
    timestamps: true,
});

if (!mongoose.models.Ticket) {
    mongoose.model('Ticket', ticketSchema);
}
const Ticket = mongoose.model('Ticket')

export default Ticket;